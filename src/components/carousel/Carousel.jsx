import React from 'react'

const Carousel = () => {
  return (
    <div>
     <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">

<div class="carousel-item active">

<img src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..."/>

{/* <!-- https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 --> */}


<div class="carousel-caption ">
<h5>Dream Home</h5>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eum odit nulla nemo quasi a, ex sunt maiores eveniet accusamus.</p>


<p><a href="#" class="btn btn-warning mt-3">Learn More</a></p>


</div>
</div>

{/* <!--====================== END OF FIRST SLIDE IMAGE ==================--> */}

<div class="carousel-item">

<img src="https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100"/>




<div class="carousel-caption ">
<h5>Always Dedicated </h5>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eum odit nulla nemo quasi a, ex sunt maiores eveniet accusamus.</p>

<p><a href="#" class="btn btn-warning mt-3">Learn More</a></p>


</div>
</div>

{/* <!--====================== END OF SECOND SLIDE IMAGE ==================--> */}


<div class="carousel-item">

<img src="https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..."/>



<div class="carousel-caption ">  
<h5>True Construction</h5>

<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eum odit nulla nemo quasi a, ex sunt maiores eveniet accusamus.</p>

<p><a href="#" class="btn btn-warning mt-3">Learn More</a></p>
</div>
</div>

{/* <!--========================= END OF THIRD SLIDE IMAGE ===============--> */}
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>

</button>

<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>

</div>

    </div>
  )
}

export default Carousel