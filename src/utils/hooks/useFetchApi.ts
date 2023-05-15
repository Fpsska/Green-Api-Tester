import { useState, useCallback } from 'react';

// /. imports

export function useFetchApi(): any {
    const [error, setError] = useState<null | string>(null);

    // /. hooks

    const fetchRequest = useCallback(
        async (URL: string, method = 'GET', body: any): Promise<any> => {
            try {
                const response = await fetch(URL, {
                    method,
                    body: body ? JSON.stringify(body) : null,
                    headers: body
                        ? { 'Content-Type': 'application/json' }
                        : undefined
                });

                const data = await response.json();

                if (response.status >= 400) {
                    throw new Error(
                        `FAILED: code ${response.status} ${data.message || ''}`
                    );
                } else {
                    console.log(`SUCCESS: code ${response.status}`);
                }

                return data;
            } catch (err: any) {
                console.error(`Error: ${err.message}`);
                setError(err.message);
            } finally {
                // console.log('')
            }
        },
        []
    );

    return { error, fetchRequest };
}
