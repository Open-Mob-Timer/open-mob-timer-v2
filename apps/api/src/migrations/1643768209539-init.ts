import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1643768209539 implements MigrationInterface {
    name = 'init1643768209539';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "isAway" boolean NOT NULL, "turnEndsAt" TIMESTAMP, "mobId" uuid NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "mob" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_2c719f4109df094a2984471a0e6" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD CONSTRAINT "FK_d143a46a7b41fb15cb5a8c5b7f6" FOREIGN KEY ("mobId") REFERENCES "mob"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_d143a46a7b41fb15cb5a8c5b7f6"`);
        await queryRunner.query(`DROP TABLE "mob"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
