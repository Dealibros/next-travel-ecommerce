// This will create the table

exports.up = async function up(sql) {
  await sql`
	CREATE TABLE tours (
	id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	name VARCHAR NOT NULL,
	destination VARCHAR(100),
	st_date FLOAT,
	duration VARCHAR (20),
	img FLOAT,
	img_thum VARCHAR (20),
	description VARCHAR,
	price FLOAT
	);
`;
};

// This will remove the table

exports.down = async function down(sql) {
  await sql`DROP TABLE tours;
`;
};
