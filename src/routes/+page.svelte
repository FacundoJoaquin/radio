<script>

    let userInputValue = '';
    let passwordInputValue = '';
    function handleUserInputChange(event) {
      userInputValue = event.target.value;
    }
  
    function handlePasswordInputChange(event) {
      passwordInputValue = event.target.value;
    }
  
    function handleSubmit() {
        //aca se puede desplegar la logica para checkear el user y paswrd
      console.log('Usuario:', userInputValue);
      console.log('Contraseña:', passwordInputValue);
    }
  </script>




<section class="login">
    <div class= "bgazul"></div>
    <div class="login-container">
        <div class="logincolor">
            <img src="mic.png" alt="">
        </div>
        <div class="dform">
            <h1>LOGIN</h1>
            <form on:submit|preventDefault={handleSubmit}>
                <label for="name"><img src="user.png" alt="user" class="user-label"></label>
                <input type="text" bind:value={userInputValue} on:input={handleUserInputChange} name="user">
                <label for="password"><img src="passwrd.png" class="user-label" alt="password"></label>
                <input type="password" bind:value={passwordInputValue} on:input={handlePasswordInputChange} name="password">
                <button type="submit">LOGIN</button>
              </form>
              
        </div>
    </div>
</section>




<style>
    :global(body) { margin: 0; padding: 0;}
    
    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 96px;
    }
    .login {
        
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        position: relative;
    }

    .bgazul {
        width: 34%;
        height: 100vh;
        background-color: #C4DFDF;
    }
    .login-container {
        box-shadow: 0px 0px 38px 11px rgba(0, 0, 0, 0.25);
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 70%;
        justify-content: space-between
    }

    .logincolor {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        overflow: hidden;
        width: 26%;
        height: auto;
        background-color: #C4DFDF;
    }
    .logincolor img {
        height: 350px;
        width: 350px;
        transform: scaleX(-1);

    }
    .dform {
        margin-right: 20%;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    form input {
        border: none;
        border-bottom: 1px solid #c1c1c1;
        outline: none; 
        padding-left: 24px;
}
    input:hover {
        border-bottom: 1px solid #6d6d6d;
    }
    .user-label {
        position: absolute;
        margin-top: 10px;
    }
    button {
        height: 30px;
        fill: none;
        border-radius: 15px;
        border: 2px solid #88dcdc
    }
    button:hover {
        background-color: #C4DFDF;
        transition: .3s;
        color: white;
    }
</style>