class Department {
    name: string;

    // constructor는 클래스를 인스턴스화 할 때 실행되는 메서드
    constructor(name: string) {
        this.name = name;
    }
}

const accounting = new Department("Accounting");

console.log(accounting.name);