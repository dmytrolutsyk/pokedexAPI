import mongoose from 'mongoose';

import { CommonServices, MoveServices, PokeapiServices, PokemonServices, SyncServices, TalentServices } from '../../services';
import { IPokemon } from '../../interfaces';
import { PokemonType } from '../../enum';

export class DatabaseConfig {
    
    private username!: string;
    private password!: string;
    private static instance: DatabaseConfig;

    constructor() {
        this.username = process.env.DB_USER as string;
        this.password = process.env.DB_PASSWORD as string;

        this.connect = this.connect.bind(this);
    }

    public static getInstance(): DatabaseConfig {
        if(!DatabaseConfig.instance)
        DatabaseConfig.instance = new DatabaseConfig();

        return DatabaseConfig.instance;
    }

    public async connect() {
        try {
            await mongoose.connect(`mongodb://${this.username}:${this.password}@pokedex_db`, { 
                useNewUrlParser: true, 
                useUnifiedTopology: true }
            )
;
            console.log(`API Connexion to database : ${mongoose.connection.readyState === 1 ? 'Connected': 'Disconnected'}`);

            await this.initiate();
        }
        catch(error) {
            console.error(error);
        }
    }

    private async initiate() {
        console.log(`Initiating Database :`);

        const syncServices = new SyncServices();
        const pokemonServices = new PokemonServices();
        const talentServices = new TalentServices();
        const moveServices = new MoveServices();

        try {
            const fetchTalents = await talentServices.getAll();
            if (fetchTalents.error || (fetchTalents.message as mongoose.Document[])?.length < 150) {
                await syncServices.syncTalents(1, 267);
            }

            const fetchMoves = await moveServices.getAll();
            if (fetchMoves.error || (fetchMoves.message as mongoose.Document[])?.length < 150) {
                await syncServices.syncMoves(1, 826);
            }

            const fetchPokemons = await pokemonServices.getAll();
            if (fetchPokemons.error || (fetchPokemons.message as mongoose.Document[])?.length < 150) {
                await syncServices.syncPokemons(1, 151);
            }

            console.log(`Database initiated`);
        }
        catch (error) {
            console.error(error);
        }
    }
}
