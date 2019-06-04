import Set from '../src/set';
describe('test Set', () => {
    const names = new Set();
    names.add("David");
    names.add("Jenifer");
    names.add("Cynthia");
    names.add("Mike");

    it('test size', () => {
       expect(names.size).toBe(4)
    });

    it('add Jenifer faild', () => {
        expect(names.add("Jenifer")).toBe(false);
    });

    it('remove Mike success', () => {
        expect(names.remove("Mike")).toBe(true);
    });

    it('size change to 3', () => {
        expect(names.size).toBe(3);
    });

    it('names contains Cynthia', () => {
        expect(names.contains("Cynthia")).toBe(true)
    });
});

