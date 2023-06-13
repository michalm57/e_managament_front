<template>
  <div class="place-items-center grid">
    <table class="table-fixed">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Description</th>
          <th>Updated At</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.name }}</td>
          <td>{{ project.description }}</td>
          <td>{{ formatDate(project.updated_at) }}</td>
          <td>{{ formatDate(project.created_at) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProjectsPage",
  data() {
    return {
      projects: [],
    };
  },
  async created() {
    try {
      const { data } = await axios.get("projects");

      if (data) {
        this.projects = data.data;
      }
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
};
</script>
