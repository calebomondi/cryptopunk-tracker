import { useEffect, useState } from 'react';
import { gql, request } from 'graphql-request';

interface AssignProps {
    punkIndex: string;
    fromAddress: string;
    toAddress: string;
    value: string;
    transactionHash: string;
    blockTimestamp: string;
}


export default function Sold() {
    const [data, setData] = useState<AssignProps[] | null>(null);

    const query = gql`
    {
        punkBoughts(first: 28, orderBy: blockTimestamp, orderDirection: desc) {
          punkIndex
          fromAddress
          toAddress
          value
          transactionHash
          blockTimestamp
        }
    }`;

    const url = 'https://api.studio.thegraph.com/query/89817/cryptopunk/version/latest';

    useEffect(() => {
        async function fetchSubgraphData() {
            const response = await request(url, query);
            setData(response.punkBoughts); // Set 'assigns' array directly
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
                            <p className="details" title={assign.fromAddress}>
                                <strong>From:</strong> {assign.fromAddress}
                            </p>
                            <p className="details" title={assign.toAddress}>
                                <strong>To:</strong> {assign.toAddress}
                            </p>
                            <p className="details" title={assign.value}>
                                <strong>Value:</strong> {assign.value}
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
