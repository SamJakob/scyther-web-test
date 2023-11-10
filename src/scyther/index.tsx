import initScyther from './scyther-web.js';

export default class Scyther {

    private readonly module: any = null;

    private constructor(module: any) {
        this.module = module;
    }

    public static async initialize(args: string[]) : Promise<Scyther> {
        const module = await initScyther(Scyther.moduleConfig(args));
        return new Scyther(module);
    }

    private static moduleConfig(args: string[]) {
        return {
            arguments: args,
        };
    };

}
