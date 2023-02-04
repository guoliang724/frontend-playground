class Test { 

    static doTest(): boolean { 
        return true || false;
    }
    static main(str: string) { 
        if (this.doTest()) {
            console.log("test succeed");
        }
        else { 
            console.log("test failed");
        }
    }
}
// ===================================================
abstract class TestCase {
    run() {
        if (this.doTest()) {
            console.log("test succeed")
        }
        else {
            console.log("test failed")
        }
    };
    abstract doTest();
}

class Application { 
    static Lists: TestCase[];
    static register(item:TestCase) { 
        this.Lists.push(item);
    }
    static main() { 
        for (let item of this.Lists) { 
            item.run();
        }
    }
}

class UserService extends TestCase { 
    doTest() { 
         
    }
}

Application.register(new UserService());