import createDict from './createDict';

interface IResponse {
    words: [string, string];
    whichOne: number;

}

const handleWords = (): IResponse => {
    const [ dict, dict_length ] = createDict()
    const index = Math.floor(Math.random() * dict_length);
    const [ firstWord, secondWord ] = dict[index][0];
    const wordsSwap = Math.floor(Math.random() * (2));
    const responseObject: IResponse = {
        words: wordsSwap ? [secondWord, firstWord] : [firstWord, secondWord],
        whichOne: wordsSwap ? 1 : 0
    }
    return responseObject;
}

export default handleWords as () => IResponse;