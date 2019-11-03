/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5dbe9b009ef7a1181f8df334
*
* You will get 10% discount for each one of your friends
* 
*/
module.exports = {
  rewardsconverterapp_db: {
    name: "rewardsconverterapp_db",
    user: "postgres",
    password: null,
    host: process.env.DB_HOST || "127.0.0.1",
    port: 5432,
    dialect: "postgres"
  },


  // Factom properties
  factom: {
    config: {
      baseUrl: "https://ephemeral.api.factom.com/v1",
      accessToken: {
        appId: "myAppId",
        appKey: "myAppKey"
      }
    },
    model: {
      // Start Factom model properties
      User: {
        factomized: "",
      },
      rewardsconverterapp: {
        factomized: "",
      },

      // End Factom model properties
    }
  },

  publicPath: "../client/dist",
  port: 3000,
  tokenSecret: "Insert Your Secret Token",
  api: "/api"
};
