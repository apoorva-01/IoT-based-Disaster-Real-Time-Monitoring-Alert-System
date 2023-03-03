import bcrypt from 'bcryptjs';
const data = {
  organisation: [
    {
      name: 'Marelli India',
      tagline: 'Marelli India',
      logo: '/',
      FF01_I04_status: false,
      FF01_I05_status: false,
    }
  ],
  users: [
    {
      name: 'IGSCS',
      email: 'igscs@gmail.com',
      password: bcrypt.hashSync('IGSCS041173WelcomeChirpstack'),
      isAdmin: true,
      isSuperAdmin: true,
    },
    {
      name: 'Admin_1',
      email: 'ashish.dangi@marelli.com',
      password: bcrypt.hashSync('12345678'),
      isAdmin: true,
      isSuperAdmin: false,
    },
    {
      name: 'User_1',
      email: 'ashish.dangi@marelli.com',
      password: bcrypt.hashSync('87654321'),
      isAdmin: false,
      isSuperAdmin: false,
    },
  ],
  devices: [
    {
      deviceName: 'dht11_01',
      type: 'dht11',
      timestamp: new Date(),
    },
    {
      deviceName: 'dht22_01',
      type: 'dht22',
      timestamp: new Date(),
    }
  ],
  deviceCalibration: [
    {
      deviceName: 'dht11_01',
      temperature_calibration:3,
      humidity_calibration:3
    },
    {
      deviceName: 'dht22_01',
      temperature_calibration:3,
      humidity_calibration:3
    },
   
  ],
  entries: [
    {
      deviceName: 'dht11_01',
      temperature:23,
      humidity:53,
      timestamp: new Date(),
    },
    {
      deviceName: 'dht22_01',
      temperature:20,
      humidity:52,
      timestamp: new Date(),
    },
    {
      deviceName: 'dht22_02',
      temperature:21,
      humidity:53,
      timestamp: new Date(),
    },
    {
      deviceName: 'dht11_01',
      temperature:24,
      humidity:53,
      timestamp: new Date(),
    },
    {
      deviceName: 'dht22_01',
      temperature:29,
      humidity:52,
      timestamp: new Date(),
    },
    {
      deviceName: 'dht22_02',
      temperature:30,
      humidity:53,
      timestamp: new Date(),
    },
    {
      deviceName: 'dht11_01',
      temperature:23,
      humidity:53,
      timestamp: new Date(),
    },
    {
      deviceName: 'dht22_01',
      temperature:20,
      humidity:52,
      timestamp: new Date(),
    },
    {
      deviceName: 'dht22_02',
      temperature:21,
      humidity:53,
      timestamp: new Date(),
    }
  ],
  ahcStatusCollection: [
    {
      name: 'AC1',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'AC2',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'AC3',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'AC4',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Humidifier1',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Humidifier2',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Humidifier3',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Humidifier4',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Chillar1',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Chillar2',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Chillar3',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Chillar4',
      status: false,
      timestamp: new Date(),
    },
  ],
 
};
export default data;
