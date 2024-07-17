<template>


    <div class="wrapper auth">
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Войти</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>или используй аккаунт</span>
                    <input type="email" placeholder="Почта" />
                    <input type="password" placeholder="Пароль" />
                    <a href="#">Забыл пароль ?</a>
                    <button>Далее</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Добро пожаловать назад !</h1>
                        <p></p>
                        <button class="ghost" id="signIn">Войти</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Салом !</h1>
                        <p></p>
                        <button class="ghost" id="signUp">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    
    </div>

</template>

<style scoped>
    @import url(../styles/login.scss);

        
    .wrapper {
        font-family: 'Montserrat', sans-serif;
        background: #f6f5f7;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: -20px 0 50px;
    }
</style>


<script>
    

    export default {
        name: 'Auth',
        data: () => ({
            
        }),
        mounted() {

            const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('container');

            signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
            });

            signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
            });

        }
    }











</script>