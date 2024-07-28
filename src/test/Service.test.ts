import { getCoolName } from "../app/Service";

describe('Test String Suit',()=>{
    it('should return string',()=>{
        expect(getCoolName()).toBe('Coolname')
    })
})