import createClient from 'redis';

const client = createClient();

function setNewSchool(schoolName, value) {
	client.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName) {
	client.GET(schoolName, (err, res) => {
		if(err){
			console.log(err)
		} else {
			console.log(res);
		}
	})
}

client.on('connect', () => {console.log('Redis client connected to the server')});
client.on('error', (err) => {console.log(`Redis client not connected to the server: ${err}`)});

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
