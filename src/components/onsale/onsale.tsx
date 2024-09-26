import { useEffect, useState } from 'react';
import { gql, request } from 'graphql-request';

interface AssignProps {
    punkIndex: string;
    minValue: string;
    transactionHash: string;
    blockTimestamp: string;
}

export default function Onsale() {
    const [data, setData] = useState<AssignProps[] | null>(null);

    const query = gql`
    {
        punkOffereds(first: 28, orderBy: blockTimestamp, orderDirection: desc) {
          punkIndex
          minValue
          transactionHash
          blockTimestamp
        }
    }`;

    const url = 'https://api.studio.thegraph.com/query/89817/cryptopunk/version/latest';

    useEffect(() => {
        async function fetchSubgraphData() {
            const response = await request(url, query);
            setData(response.punkOffereds); // Set 'assigns' array directly
        }

        fetchSubgraphData();
    }, []);

    return (
        <main>
            {data ? (
                <div className="assign-container">
                    {data.map((assign: AssignProps, index: number) => (
                        <div key={index} className="assign-box">
                            <p className="details" title={assign.punkIndex}>
                                <strong>PunkIndex:</strong> {assign.punkIndex}
                            </p>
                            <p className="details" title={assign.minValue}>
                                <strong>Minvalue:</strong> {assign.minValue}
                            </p>
                            <p className="details" title={assign.transactionHash}>
                                <strong>Trans:</strong> {assign.transactionHash}
                            </p>
                            <p className="details" title={new Date(parseInt(assign.blockTimestamp) * 1000).toLocaleString()}>
                                <strong>Time:</strong> {new Date(parseInt(assign.blockTimestamp) * 1000).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </main>
    );
}
