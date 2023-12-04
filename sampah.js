{/* <header>
  <h2 class="logo">logo</h2>
  <nav class="navbar">
      <a href="#" class="active"> Home<span></span></a>
      <a href="#about">About<span></span></a>
      <a href="#service1">Service<span></span></a>
      <a href="#contact">Contact<span></span></a>
  </nav>
</header>

<section class="parallax">
  <h2 id="text">TANKER.IO</h2>  
</section>


header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.logo {
  font-size: 2rem;
  color:white;
  user-select: none;
}

.navbar a {
  position: relative;
  font-size: 1.1rem;
  color: #333 ;
  font-weight: 600;
  text-decoration: none;
  margin-left: 20px;
  padding: 6px 15px;
  transition:1s ;
}

.navbar a:hover,
.navbar a.active {
  color: #333;
}

.navbar a span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(195,185,34);
background: linear-gradient(0deg, rgba(195,185,34,1) 0%, rgba(255,183,0,1) 0%, rgba(255,218,0,1) 0%, rgba(240,187,42,1) 72%, rgba(233,170,23,1) 93%, rgba(253,187,45,1) 98%);
  border-radius: 30px;  
  z-index: -1;
  transform: scale(0);
  transition: 0.5s;
  opacity: 0;
}

.navbar a:hover span,
.navbar a,:active    {
  transform: scale(1);
  opacity: 1;
}

.parallax {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background:url(header/Aqualand-Summer-2017-47.webp);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

#text {
  position: absolute;
  font-size: 5rem;
  color: white;
  text-shadow: 2px 4px 5px black;
}

.parallax img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
} */}