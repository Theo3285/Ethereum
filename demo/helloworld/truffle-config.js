module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    }
      production: {
        host: "bnp5rh4ng4xh.northeurope.cloudapp.azure.com",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
