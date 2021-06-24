module.exports = (sequelize, Datatypes) => {
    const Students = sequelize.define("Students",
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
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
            nameInitial:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            email:{
                type: Datatypes.STRING,
                allowNull: false,

            },
            mobile:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            level:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            acdyear:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            gpa:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            address:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            nic:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            sex:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            yearAl:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            streamAl:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            ALsubject1:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            ALsubject1Result:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            ALsubject2:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            ALsubject2Result:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            ALsubject3:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            ALsubject3Result:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            ALenglishResult:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            ALgenTestmarks:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            qualificationName:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            qualificationInstitute:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            courseDuration:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            courseExpire:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            ProfTitile:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            ProfOrg:{
                type: Datatypes.STRING,
                allowNull: true,
                default: null
                
            },
            password:{
                type: Datatypes.STRING,
                allowNull: false,

            },
            
            
        },
        {
            tableName: "students"
        }
    );
    return Students;  
};