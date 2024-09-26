import { useEffect, useState } from 'react';
import { gql, request } from 'graphql-request';

interface AssignProps {
    punkIndex: string;
    to: string;
    from: string;
    transactionHash: string;
    blockTimestamp: string;
}

export default function Transfer() {
    const [data, setData] = useState<AssignProps[] | null>(null);


    const query = gql`
    {
        punkTransfers(first: 28, orderBy: blockTimestamp, orderDirection: desc) {
          punkIndex
          to
          from
          transactionHash
          blockTimestamp
        }
    }`;

    const url = 'https://api.studio.thegraph.com/query/89817/cryptopunk/version/latest';

    useEffect(() => {
        async function fetchSubgraphData() {
            const response = await request(url, query);
            setData(response.punkTransfers); // Set 'assigns' array directly
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
                            <p className="details" title={assign.to}>
                                <strong>To:</strong> {assign.to}
                            </p>
                            <p className="details" title={assign.from}>
                                <strong>From:</strong> {assign.from}
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
