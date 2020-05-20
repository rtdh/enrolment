$(document).ready(function() {
	
	// load ranks
	
	$.ajax({
		url: '/loadmandals',
		method: 'GET',
		contentType: 'application/json',
		success: function(response) {
			var mdl = $('#mandal');
			response.mandals.forEach(function(mandal) {
				mdl.append(
					'<option value="' + mandal.mandal + '">' + mandal.mandal + '</option>'
				);
			});
		}
	});
	
	$('#mandal').on('change', function() {
		var mandal = $('#mandal').val()
		console.log(mandal)
		
		$.ajax({
			url: '/loadschools',
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({ mandal: mandal }),
			success: function(response) {
				var sch = $('#school');
				//console.log(response.schools)
				sch.html('')
				response.schools.forEach(function(school) {
					
					sch.append(
						'<option value="' + school.schoolnamewithudisecode + '">' + school.schoolnamewithudisecode + '</option>'
					);
				});
			}
		});
		
	})
	
	
	$('#enrolmentBtn').on('click', function(e) {
		e.preventDefault()
		var mandal = $('#mandal').val()
		var school = $('#school').val()
		//alert(mandal + '-' + school)
		
		$.ajax({
			url: '/enrolment',
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({ mandal: mandal, school :  school }),
			success: function(response) {
				console.log(response.school)
				
				var school = response.school
				
				var results = $('#enrolmentResults')
				results.html('')
				
				results.append(`

						<table id="enrolmentTable" class="table table-bordered table-striped">
						<thead>
						<tr id="tblHeading">
							<td colspan="2">Mandal: ${school[0].mandal}</td>
							<td colspan="2">SchoolName: ${school[0].schoolnamewithudisecode}</td></td>
						</tr>			
						  <tr>
							<th>Class</th>
							<th>Boys</th>
							<th>Girls</th>
							<th >Total</th>
						  </tr>
						</thead>
						<tbody>
						  <tr>
							<td >I</td>
							<td >${school[0].IB}</td>
							<td >${school[0].IB}</td>
							<td >${school[0].IB}</td>
						  </tr>
						  <tr>
							<td >II</td>
							<td >${school[0].IIB}</td>
							<td >${school[0].IIG}</td>
							<td >${school[0].IIT}</td>
						  </tr>
						  <tr>
							<td >III</td>
							<td >${school[0].IIIB}</td>
							<td >${school[0].IIIC}</td>
							<td >${school[0].IIIT}</td>
						  </tr>
						  <tr>
							<td >IV</td>
							<td >${school[0].IVB}</td>
							<td >${school[0].IVG}</td>
							<td >${school[0].IVT}</td>
						  </tr>
						  <tr>
							<td >V</td>
							<td >${school[0].VB}</td>
							<td >${school[0].VG}</td>
							<td >${school[0].VT}</td>
						  </tr>
						  <tr>
							<td >VI</td>
							<td >${school[0].VIB}</td>
							<td >${school[0].VIG}</td>
							<td >${school[0].VIT}</td>
						  </tr>
						  <tr>
							<td >VII</td>
							<td >${school[0].VIIB}</td>
							<td >${school[0].VIIG}</td>
							<td >${school[0].VIIT}</td>
						  </tr>
						  <tr>
							<td >VIII</td>
							<td >${school[0].VIIIB}</td>
							<td >${school[0].VIIIG}</td>
							<td >${school[0].VIIIT}</td>
						  </tr>
						  <tr>
							<td >IX</td>
							<td >${school[0].IXB}</td>
							<td >${school[0].IXG}</td>
							<td >${school[0].IXG}</td>
						  </tr>
						  <tr>
							<td >X</td>
							<td >${school[0].XB}</td>
							<td >${school[0].XG}</td>
							<td >${school[0].XT}</td>
						  </tr>
						  <tr>
							<td >TOTAL</td>
							<td >${school[0].IB + school[0].IIB +  school[0].IIIB +  school[0].IVB + school[0].VB +  school[0].VIB + school[0].VIIB + school[0].VIIIB + school[0].IXB + school[0].XB } </td>
							  
							<td >${school[0].IG + school[0].IIG +  school[0].IIIC +  school[0].IVG + school[0].VG +  school[0].VIG + school[0].VIIG + school[0].VIIIG + school[0].IXG + school[0].XG }</td>
							<td >${school[0].IB + school[0].IIB +  school[0].IIIB +  school[0].IVB + school[0].VB +  school[0].VIB + school[0].VIIB + school[0].VIIIB + school[0].IXB + school[0].XB + school[0].IG + school[0].IIG +  school[0].IIIC +  school[0].IVG + school[0].VG +  school[0].VIG + school[0].VIIG + school[0].VIIIG + school[0].IXG + school[0].XG}</td>
						  </tr>
						</tbody>
						</table>
			`)
				
			}
		});
	
	})
	

	
	
})