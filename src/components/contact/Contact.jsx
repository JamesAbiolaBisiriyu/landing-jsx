import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* <!-- ======================== CONTACT SECTION ================= --> */}

<section id="contact" class="contact section-padding">

<div class="container">

<div class="row">

<div class="col-md-12">

<div class="section-header text-center pb-5">

<h2>Contact Us</h2>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id perspiciatis consectetur beatae vero itaque?</p>

</div>

</div>

</div>


<div class="row m-0">

<div class="col-md-12 p-0 pt-4 p-4 pb-4">
<div class="row">
<div class="col-md-12">
<div class="mb-3">
<input type="text" class="form-control" required placeholder="Your Full Name"/>
</div>
</div>

{/* <!-- FULL NAME BAR --> */}


<div class="col-md-12">
<div class="mb-3">
<input type="email" class="form-control" required placeholder="E-mail Address"/>
</div>
</div>

{/* <!-- EMAIL BAR --> */}


<div class="col-md-12">
<div class="mb-3">

<textarea rows="3" required class="form-control" placeholder="Your Query Here"></textarea>

</div>
</div>

<button class="btn btn-warning btn-lg btn-block mt-3">  Send Now</button>

</div>
</div>

</div>


{/* <!--  TEXT AREA --> */}


<div class="row m-0">
<div class="col-md-12 p-0 pt-4 pb-4">


<form action="#" class="bg-light p-4.m-auto">

</form>


</div>
</div>



</div>

</section>

    </div>
  )
}

export default Contact