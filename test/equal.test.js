test("sayName = Hello, GallickGun!", () => {
    const name = "GallickGun";
    const sayName = `Hello, ${name}!`;

    expect(sayName).toBe("Hello, GallickGun!")
    
});

test("test toEqual", () => {
    let person = {
        id: "P"
    };
    Object.assign(person, {name: "GallickGun"});

    expect(person).toEqual({id: "P", name: "GallickGun"});

});