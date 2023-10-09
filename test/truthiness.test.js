test("Truthiness", () => {
    
    let value = null;

    expect(value).toBeNull(); // should pass
    expect(value).toBeDefined(); // should pass
    expect(value).toBeFalsy(); // should pass, null = false

    value = undefined;

    expect(value).toBeUndefined(); // should pass
    expect(value).toBeFalsy(); // should pass, undefined = false

    value = Gallick;
    
    expect(value).toBeTruthy(); // should pass
});