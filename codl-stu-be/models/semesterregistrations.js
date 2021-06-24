module.exports = (sequelize, Datatypes) => {
    const SemesterRegistrations = sequelize.define("SemesterRegistrations",
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            student_id: {
                type: Datatypes.INTEGER,
                allowNull: false
            },
            RegNo:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            Name:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            AccdYear:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            Semester:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            Csub1:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            Csub2:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            Csub3:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            Supsub1:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            Supsub2:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            Supsub3:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            Fsub1:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            Fsub2:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            Fsub3:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
        },    

            {
                tableName: "semesterregistrations"
            }
        );
        
        return SemesterRegistrations;  
        }