import { handleSubmit } from '../client/js/formHandler'

describe('Test: "handleSubmit" should exist' , () => {
    test('It should be present!', async () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Test: "handleSubmit" should be of the type function' , () => {
    test('It should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});