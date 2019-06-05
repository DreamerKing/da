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

    it('union operation', () => {
        const names1 = new Set();
        names1.add("King");
        names1.add("Dreamer");
        names1.add("Panpan")
        const names2 = new Set();
        names2.add("Joy");
        names2.add("King");
        names2.add("Tom");
        let names = names1.union(names2);
        expect(names.size).toBe(5);
    });

    it('interset operation', () => {
        const names1 = new Set();
        names1.add("King");
        names1.add("Dreamer");
        names1.add("Panpan")
        const names2 = new Set();
        names2.add("Joy");
        names2.add("King");
        names2.add("Tom");
        let names = names1.interset(names2);
        expect(names.size).toBe(1);
    });

    it('subset operation', () => {
        const names1 = new Set();
        names1.add("King");
        names1.add("Dreamer");
        names1.add("Panpan")
        names1.add("Joy");

        const names2 = new Set();
        names2.add("Joy");
        names2.add("King");
        names2.add("Tom");
        expect(names2.subset(names1)).toBe(false);
        names1.add("Tom");
        expect(names2.subset(names1)).toBe(true);
    });

    it('difference operation', () => {
        const names1 = new Set();
        names1.add("King");
        names1.add("Dreamer");
        names1.add("Panpan")
        const names2 = new Set();
        names2.add("Joy");
        names2.add("King");
        names2.add("Tom");
        let names = names1.differrence(names2);
        expect(names.size).toBe(2);
    });
});

