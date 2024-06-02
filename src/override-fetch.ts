(function () {
  const originalFetch = window.fetch;

  window.fetch = function (
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> {
    const args: [RequestInfo | URL, RequestInit?] = [input, init];

    if (typeof input === 'string' && input.includes('nikkei225jp.com')) {
      console.log('Fetch request:', args);

      return originalFetch.apply(this, args).then((response: Response) => {
        const responseClone = response.clone();

        responseClone
          .json()
          .then((json: any) => {
            console.log(`Fetch response for ${input}:`, json);
          })
          .catch((error: Error) => {
            console.error('Error in reading response body as JSON:', error);
          });

        return response;
      });
    }

    return originalFetch.apply(this, args);
  };
})();
