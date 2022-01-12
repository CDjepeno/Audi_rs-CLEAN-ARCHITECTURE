import {MigrationInterface, QueryRunner} from "typeorm";

export class models1641994094619 implements MigrationInterface {
    name = 'models1641994094619'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(255) NOT NULL, \`lastnamer\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`car\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`km\` int NOT NULL, \`price\` int NOT NULL, \`image\` varchar(255) NOT NULL, \`available\` tinyint NOT NULL, \`ownerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`car\` ADD CONSTRAINT \`FK_cce467b67e5d4a0012473f985ea\` FOREIGN KEY (\`ownerId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`car\` DROP FOREIGN KEY \`FK_cce467b67e5d4a0012473f985ea\``);
        await queryRunner.query(`DROP TABLE \`car\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
