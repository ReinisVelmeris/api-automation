import { request } from '../../utils/requests.js'
//import { getCreateBooksRequestBody } from '../../utils/requestBodyGenerator/books.js'

export async function getBooks() {
    it('retrieve list of books', async function () {
        await request(this, 'GET', '/books', undefined, true, 
            {
                statusCode : 201,
                expectedFields: [
                    '0.id'
                ],
                expectedValues: [
                                    {path: '0.id', value: 1}
                                ],
                executionVariables: [
                                        {path: 'id', name: 'booksId'}, 
                                    ]
            }
        )
    })
}