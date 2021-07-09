<template>
  <div id="html5">
    <h3>h5中的新玩意儿</h3>
    <section>
      <mark>details summary</mark>
      <details v-for="item in 3" :key="item">
        <summary class="clickSpan">详细信息{{item}}</summary>
        <table>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Location</th>
                <th>Job</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Adam</td>
                <td>Huston</td>
                <td>UI/UX</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Bob</td>
                <td>London</td>
                <td>Machine Learning</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Jack</td>
                <td>Australia</td>
                <td>UI Designer</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Tapas</td>
                <td>India</td>
                <td>Blogger</td>
            </tr>
        </table>
      </details>
    </section>
    <section>
      <mark> 列表（contenteditable="true"） </mark>
      <span>个人感觉用处不大</span>
      <ul contenteditable="true">
        <li> 1. Milk </li>
        <li> 2. Bread </li>
        <li> 3. Honey </li>
      </ul>
      <div contenteditable="true">{{ editMessage }}</div>
    </section>
    <section>
      <mark> 输出（oninput） </mark>
      <span>个人感觉用处不大</span>
      <form oninput="x.value=parseInt(a.value) * parseInt(b.value)">
        <input type="number" id="a" value="0">
                * <input type="number" id="b" value="0">
                      = <output name="x" for="a b"></output>
      </form>
      <form action="" method="get">
        <mark> （datalist） </mark>
        <span>个人感觉像查询选框</span>
        <div>
          <input list="fruits" name="fruit" id="fruit">
          <datalist id="fruits">
            <option value="Apple" />
            <option value="Orange" />
            <option value="Banana" />
            <option value="Mango" />
            <option value="Avacado" />
          </datalist>
          <input type="submit">
        </div>
        <mark>input type="range"</mark>
        <input 
          type="range" 
          name="range" 
          min="0" 
          max="100" 
          step="1" 
          value="" /><br>
        <mark>meter</mark>
        <meter id="home" value="4" min="0" max="10">2 out of 10</meter><br>
        <mark>progress</mark>
        <progress id="file" value="32" max="100"> 32% </progress><br>
        <mark>颜色选择器</mark>{{ colorValue }}
        <input type="color" v-model="colorValue">
      </form>
    </section>
    <section></section>
  </div>
</template>

<script>
export default {
  name: "H5",
  data() {
    return {
      editMessage: "编辑信息",
      colorValue: "#ccc"
    }
  },
  watch: {
    editMessage(val) {
      console.log(val);
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
#html5
  .clickSpan
    background-color #efefef
  mark
    background-color green
    color #FFFFFF

</style>