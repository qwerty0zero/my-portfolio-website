<template>
    <div class="hard_skill_container">
        <h4>MY HARD SKILLS</h4>
        <aside>
            <div class="skill_holder">
                <h5>Front-End</h5>
                <div class="skills">
                    <div class="skill_text"><p>HTML</p></div>
                  <div class="skill_text"><p>CSS</p></div>
                  <div class="skill_text"><p>JS</p></div>

                  <div class="skill_text"><p>VUE3</p></div>
                  <div class="skill_text"><p>NUXT.JS</p></div>
                </div>
            </div>
            <div class="skill_holder">
                <h5>Backk-End & CMS</h5>
                <div class="skills">
                  <div class="skill_text"><p>PYTHON</p></div>
                  <div class="skill_text"><p>SQL</p></div>
                  <div class="skill_text"><p>REST API</p></div>

                  <div class="skill_text"><p>OpenCart</p></div>
                  <div class="skill_text"><p>PrestaShop</p></div>
                  <div class="skill_text"><p>WordPress</p></div>
                  <div class="skill_text"><p>Strapi</p></div>
                </div>
            </div>
            <div class="skill_holder">
                <h5>Web-Design</h5>
                <div class="skills">
                  <div class="skill_text"><p>Figma</p></div>
                  <div class="skill_text"><p>Responsive Design</p></div>
                  <div class="skill_text"><p>Pixel Perfect</p></div>
                  <div class="skill_text"><p>UI/UX Best Practices</p></div>
                  <div class="skill_text"><p>Modern Web Layouts</p></div>
                </div>
            </div>
        </aside>
    </div>
</template>

<script setup>

</script>


<style >
.hard_skill_container {
  max-height: 50dvh;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  z-index: 11;
  gap: 4rem;
}

aside {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.skill_holder {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.skills {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.hard_skill_container h4 {
    font-weight: 700;
    font-size: 5rem;
    max-width: 50%;
}

.hard_skill_container h5 {
    font-size: 1.3rem;
    font-weight: 500;

}

.skill_text {
    background-color: #f4f4f4;
    border: .052vw solid #f4f4f4;
  padding: 10px 25px;    border-radius: 50px;
  position: relative;
  transition: 0.3s ease-in-out;


}
.skill_text>p{
  position: relative;
  z-index: 4;
}
.skill_text:hover>p{
  color: var(--text-color);

}
.skill_text::after{
  content: "";
  border-radius: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--text-color-black);
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0 100%);
  transition: 0.3s ease-in-out;
}
.skill_text:hover::after{
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
}
@media screen and (max-width: 1100px) {
  .hard_skill_container {
    flex-direction: column;
    justify-content: space-between;
    height: unset;
    gap: 4rem;
  }
  .hard_skill_container h4{
    max-width: 100%;
  }
}
@media (max-width: 768px) {

  .hard_skill_container h4 {
    font-size: 3rem;
  }
}
</style>