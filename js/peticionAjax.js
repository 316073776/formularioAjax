$(document).ready( function(){

	$('#formulario').validate( {

		submitHandler: function(){
		
			$.post("guardar.php", {
				nombre: $("#nombre").val(),
				apaterno: $("#apaterno").val(),
				amaterno: $("#amaterno").val(),
				ciudad: $("#ciudad").val()
			},

			function(data, status){
				alert("Datos: " + data + "Estado: " + status);
				$("#formulario").trigger("reset");
			});
		}, 
		
		rules: {

			nombre: {
				required: true,
				minlength: 5,
				maxlength: 50
			},

			apaterno: {
                required: true,
                minlength: 5,
                maxlength: 50
            },

			amaterno: {
                minlength: 5,
                maxlength: 50
            },

			ciudad: {
	            required: true,
	            minlength: 5,
	            maxlength: 50
            }
		},

		messagges: {

			nombre: {
				required: "El campo está vacío, por favor ingrese su nombre",
				minlenght: "El nombre debe tener al menos 5 caracteres",
				maxlenght: "El nombre no debe tener más de 50 caracteres"
			},

			apaterno: {
                required: "El campo está vacío, por favor ingrese su apellido paterno",
                minlenght: "El apellido debe tener al menos 5 caracteres",
                maxlenght: "El apellido no debe tener más de 50 caracteres"
        	},

			amaterno: {
                minlenght: "El apellido debe tener al menos 5 caracteres",
                maxlenght: "El apellido no debe tener más de 50 caracteres"
        	},

			ciudad: {
                required: "El campo está vacío, por favor ingrese su ciudad de residencia",
                minlenght: "La ciudad debe tener al menos 5 caracteres",
                maxlenght: "La ciudad no debe tener más de 50 caracteres"
        	}
		}
	});

});
