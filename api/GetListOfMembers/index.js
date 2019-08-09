module.exports = async function (context, req) {
    //context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        body: [
            {
                "id": "138498941",
                "status": "Active",
                "severity": "0",
                "title": "Literally everything has broken"
            },
            {
                "id": "138498941",
                "status": "Active",
                "severity": "1",
                "title": "Walmart is down"
            },
            {
                "id": "138498941",
                "status": "Resolved",
                "severity": "3",
                "title": "Function deployment is failing"
            },
            {
                "id": "138498941",
                "status": "Mitigated",
                "severity": "4",
                "title": "Customer John is not happy"
            }
        ]
    };
};