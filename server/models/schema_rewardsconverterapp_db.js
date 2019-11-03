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
// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Rewardsconverterapp_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
        _id: { 
          type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
          type: Sequelize.STRING
      },
      
      name: {
          type: Sequelize.STRING
      },
      
      password: {
          type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
          type: Sequelize.STRING
      },
      
      username: {
          type: Sequelize.STRING, 
        allowNull: false
      },
      
      // RELATIONS
      
      
      // EXTERNAL RELATIONS
      /*
      */

      // FACTOM BLOCKCHAIN
    },
      { sequelize, tableName: "user", timestamps: false }
    );



    /**
      * ------------------------------------
      * rewardsconverterapp
      * ------------------------------------
      */
    class rewardsconverterapp extends Sequelize.Model{}
    rewardsconverterapp.init({
        _id: { 
          type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      // RELATIONS
      
      
      // EXTERNAL RELATIONS
      /*
      */

      // FACTOM BLOCKCHAIN
    },
      { sequelize, tableName: "rewardsconverterapp", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

      /**
        * ------------------------------------
        * Factom blockchain entities
        * ------------------------------------
        */

      /**
      * ------------------------------------
      * Chain
      * ------------------------------------
      */
      class Chain extends Sequelize.Model {}
      Chain.init(
        {
          _id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },

          chain_id: {
            type: Sequelize.STRING,
            allowNull: false
          },

          entry_hash: {
            type: Sequelize.STRING
          },

          content: {
            type: Sequelize.STRING
          },

          //RELATIONS

          identity: {
            type: Sequelize.INTEGER,
            references: {
              model: "Identity",
              key: "_id"
            }
          }

          //EXTERNAL RELATIONS
          /*
          */
        },
        { sequelize, tableName: "chain", timestamps: false, modelName: "Chain" }
      );

      /**
      * ------------------------------------
      * Entry
      * ------------------------------------
      */
      class Entry extends Sequelize.Model {}
      Entry.init(
        {
          _id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },

          entry_hash: {
            type: Sequelize.STRING
          },

          content: {
            type: Sequelize.STRING
          },

          //RELATIONS

          chain: {
            type: Sequelize.INTEGER,
            references: {
              model: "Chain",
              key: "_id"
            }
          }
        },
        { sequelize, tableName: "entry", timestamps: false, modelName: "Entry" }
      );

      /**
      * ------------------------------------
      * Identity
      * ------------------------------------
      */
      class Identity extends Sequelize.Model {}
      Identity.init(
        {
          _id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },

          chain_id: {
            type: Sequelize.STRING,
            allowNull: false
          },

          entry_hash: {
            type: Sequelize.STRING,
            allowNull: false
          },

          key_pairs: {
            type: Sequelize.JSON
          }

          //RELATIONS

          //EXTERNAL RELATIONS
          /*
          identity: {
            type: Sequelize.INTEGER,
            references: {
              model: Doctor,
              key: '_id',
            }
          },
          */
        },
        {
          sequelize,
          tableName: "identity",
          timestamps: false,
          modelName: "Identity"
        }
      );

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
