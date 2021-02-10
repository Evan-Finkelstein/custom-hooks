
import React from 'react';
import { useBreeds } from '../../hooks/breeds';
import ListItem from './ListItem';

const ListDisplay = () => {

    const { loading, breeds, page, setPage } = useBreeds();

    return (

        <>

            {loading ?
                <div>Loading...</div>

                : <div data-testid="breeds"> <ul >
                    {breeds.map(breed => (
                        <li key={breed.id} style={{ margin: '50px' }}>
                            < ListItem {...breed} />
                        </li>
                    ))};
        </ul>
                </div>}

            <div>{page === 0 ?
                null
                :
                <button onClick={() => setPage(page - 1)}>previous page</button>
            }

                <div>page {page}</div>
                {page === 11 ?
                    null
                    :
                    <button onClick={() => setPage(page + 1)}>
                        next page
                    </button>
                }
            </div>
        </>
    );
};
export default ListDisplay;
