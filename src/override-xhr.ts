import { getLastValue } from '@/utils/parser';

(function () {
  const originalXHR = window.XMLHttpRequest;

  function overrideXHR(): XMLHttpRequest {
    const xhr = new originalXHR();
    let requestUrl: string;

    const originalOpen = xhr.open;
    xhr.open = function (
      method: string,
      url: string,
      async: boolean = true,
      user?: string | null,
      password?: string | null
    ): void {
      requestUrl = url;

      if (url.includes('/_data/_nfsWEB/ajax_vix.js')) {
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Last value:', getLastValue(xhr.responseText));
          }
        };
      }

      return originalOpen.apply(xhr, [method, url, async, user, password]);
    };

    return xhr;
  }

  window.XMLHttpRequest = overrideXHR as any;
})();
