var mongoose = require('mongoose');
var employee = mongoose.model('employee');
var promise = require('promise');


exports.create = function (name, email, dob, department, gender, age) {
    
    return new Promise(function (success, failure) {
        var emp = new employee();
        emp.name = name;
        emp.email = email
        emp.dob = dob;
        emp.department = department
        emp.gender = gender;
        
        emp.save().then(function (data) {
            success(data);
        }).catch(function (err) {
            var message = "Email address already exist";
            failure(message);
        });
        
    });
}

exports.readAll = function () {
    return new Promise(function (success, failure) {
        employee.find({}).then(function (data) {
            success(data);
        }).catch(function (err) {
            var message = "Email address already exist";
            failure(message);
        });
    });
}

exports.readById = function (id) {
    
    return new Promise(function (success, failure) {
        employee
        .findById(id)
        .then(function (employee) {
            success(employee);
        }).catch(function (err) {
            failure("No Employee Found");
        })
    });
}

exports.update = function (id, name, email, dob, department, gender, age) {
    
    return new Promise(function (success, failure) {
        
        employee.findById(id)
        .then(function (employee) {
            
            employee.name = name;
            employee.email = email
            employee.dob = dob;
            employee.department = department;
            employee.gender = gender
            employee.save()
            .then(function (data) {
                success(data);
            })
            .catch(function (err) {
                var message = "Email address already exist";
                failure(message);
            });
        })
        .catch(function (err) {
            console.log(err);
        });

    });
}

exports.delete = function (id) {
    
    return new Promise(function (success, failure) {
        employee.remove(id)
        .then(function () {
            success('Employee removed successfully');
        })
        .catch(function (err) {
            console.log(err);
        });
    });
}
