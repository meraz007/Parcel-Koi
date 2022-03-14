<template>
    <section class="mt-3">
  <div class="mask d-flex align-items-center">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center ">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 1rem;">
            <div class="card-body bg-dark text-white p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>
              <form @submit.prevent="Register">
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                  <input type="email" 
                  id="form3Example3cg" 
                  class="form-control" 
                  v-model="email"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4cg">Password</label>
                  <input type="password" 
                  id="form3Example4cg" 
                  class="form-control" 
                  v-model="password"
                  />
                </div>

                <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-outline-light btn-lg px-5">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <router-link to="/login" class="text-white"><u>Login here</u></router-link></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import firebase from 'firebase'
import {ref} from 'vue';
import { useRouter } from "vue-router";
export default {
    setup(){
        const router = useRouter();
        const email=ref("");
        const password=ref("");

        const Register =()=>{
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value,password.value)
                .then(() =>{
                    alert('Successfully Registerd! Please Login');
                    router.push("/login");
                })
                .catch(err =>alert(err.message))
        }
        return {
            Register,
            email,
            password
        }
    }
}
</script>