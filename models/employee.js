module.exports=(sequelize,Sequelize) => {
    const Employee = sequelize.define("employees_table",{
        name:{
            type:Sequelize.STRING,
        },
        father_name:{
            type: Sequelize.STRING,
        },
        date_of_birth: {
            type: Sequelize.STRING,
        },
        gender: {
            type: Sequelize.BOOLEAN,
        },
        nrc_exist: {
            type: Sequelize.BOOLEAN,
        },
        nrc: {
            type: Sequelize.STRING,
        }

    })
    return Employee;
}