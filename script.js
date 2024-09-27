document.addEventListener('DOMContentLoaded', function() {
  const formHtml = `
      <div class="container">
          <h1>Form Quiz Pemrograman Web</h1>
          
          <form id="quizForm">
              <div class="input-group">
                  <label class="label" for="name">Nama:</label>
                  <input type="text" id="name" required autofocus>
              </div>
              
              <div class="input-group">
                  <label class="label" for="nim">NIM:</label>
                  <input type="text" id="nim" required>
                  <div id="nimError" style="color: red; display: none;">NIM harus berupa angka!</div>
              </div>
              
              <div class="input-group">
                  <label class="label" for="prodi">Program Studi:</label>
                  <div id="notification" style="margin-bottom: 5px; color: green; display: none;"></div>
                  <select id="prodi" required>
                      <option value="">Pilih Program Studi</option>
                      <option value="Logistik Kelautan">Logistik Kelautan</option>
                      <option value="Sistem Informasi Kelautan">Sistem Informasi Kelautan</option>
                      <option value="Pendidikan Guru Sekolah Dasa">Pendidikan Guru Sekolah Dasar</option>
                      <option value="Pendidikan Kelautan Perikanan">Pendidikan Kelautan Perikanan</option>
                  </select>
              </div>

              <fieldset>
                  <legend>Jenis Kelamin:</legend>
                  <div class="input-group">
                      <label><input type="radio" name="gender" value="Laki-laki" required>Laki-laki</label>
                      <label><input type="radio" name="gender" value="Perempuan">Perempuan</label>
                  </div>
              </fieldset>

              <fieldset>
                  <legend>Hobi:</legend>
                  <div class="input-group">
                      <label><input type="checkbox" name="hobby" value="Baca"> Baca</label>
                  </div>
                  <div class="input-group">
                      <label><input type="checkbox" name="hobby" value="Olahraga"> Olahraga</label>
                  </div>
                  <div class="input-group">
                      <label><input type="checkbox" name="hobby" value="Musik"> Musik</label>
                  </div>
                  <div class="input-group">
                      <label><input type="checkbox" name="hobby" value="Travelling"> Travelling</label>
                  </div>
              </fieldset>

              <button type="submit">Kirim</button>
          </form>
          <div id="result"></div>
          <div id="nameError" style="color: red; display: none;">Nama tidak boleh lebih dari 10 karakter!</div>
      </div>
  `;


  document.body.innerHTML += formHtml;

 
  document.getElementById('name').focus();

 
  document.getElementById('nim').addEventListener('input', function() {
      const nimError = document.getElementById('nimError');
      const value = this.value;

      
      if (!/^\d*$/.test(value)) {
          nimError.style.display = 'block'; 
          this.value = value.replace(/[^\d]/g, ''); 
      } else {
          nimError.style.display = 'none'; 
      }
  });

  document.getElementById('prodi').addEventListener('change', function() {
      const selectedProdi = this.value;
      const notification = document.getElementById('notification');

      if (selectedProdi) {
          notification.innerText = 'Anda telah mengubah Program Studi ke: ' + selectedProdi;
          notification.style.display = 'block'; 
      } else {
          notification.innerText = '';
          notification.style.display = 'none'; 
      }
  });

  const inputs = document.querySelectorAll('input, select');
  inputs.forEach(input => {
      input.addEventListener('mouseover', function() {
          this.style.border = '2px solid green'; 
      });

      input.addEventListener('mouseout', function() {
          this.style.border = ''; 
      });

      input.addEventListener('click', function() {
          this.style.backgroundColor = 'lightblue'; 
      });

      
      input.addEventListener('blur', function() {
          this.style.backgroundColor = ''; 
      });
  });

  
  document.getElementById('quizForm').addEventListener('submit', function(event) {
      const name = document.getElementById('name').value;
      
      if (name.length > 10) {
          event.preventDefault(); 
          document.getElementById('nameError').style.display = 'block'; 
          return; 
      } else {
          document.getElementById('nameError').style.display = 'none'; 
      }

      event.preventDefault(); 

      const nim = document.getElementById('nim').value;
      const prodi = document.getElementById('prodi').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const hobbies = Array.from(document.querySelectorAll('input[name="hobby"]:checked')).map(checkbox => checkbox.value);


      const result = `
          Nama: ${name}<br>
          NIM: ${nim}<br>
          Program Studi: ${prodi}<br>
          Jenis Kelamin: ${gender}<br>
          Hobi: ${hobbies.join(', ') || 'Tidak ada hobi yang dipilih'}
      `;
      document.getElementById('result').innerHTML = result;
  });
});
