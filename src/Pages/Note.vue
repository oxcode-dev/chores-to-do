<template>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <Layout name="Todo List">
    <div class="row mt-5">
      <div class="col-md-10 offset-md-1">
        <div>
          <h2 class="text-white">Tasks</h2>
        </div>
        <div class="card">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '@/Layouts/Index'

export default {
  name: 'Note',
  components: {
    Layout
  }
}
</script>
