import ValueObject from "../value-object";

class StubValueObject extends ValueObject{

}

describe('ValueObject Unit Test', () => {

    it('should set value', () => {
        let vo = new StubValueObject('string value');
        expect(vo.value).toBe('string value');
        
        vo = new StubValueObject({prop1: 'value1'});
        expect(vo.value).toStrictEqual({prop1: 'value1'});
        
        console.log(vo+"");
        // console.log(`${new StubValueObject(new Date() )}`);
    });
}); 