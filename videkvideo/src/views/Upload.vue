<template>
  <div id="app">
    <div class="container">
      <!--UPLOAD-->
      <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <h1 class="text-primary">Upload Video</h1>
        <div>
          <h2>
            <span class="label label-default">Title</span>
          </h2>

          <input class="form-control" v-model="title" placeholder="Title" />
          <br />
          <div class="form-group">
            <h2>
              <span class="label label-default">Description</span>
            </h2>
            <textarea
              class="form-control"
              v-model="description"
              id="descriptionTextarea"
              placeholder="Description"
            ></textarea>
          </div>
          <div class="dropbox">
            <input
              type="file"
              multiple
              :name="uploadFieldName"
              :disabled="isSaving"
              @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
              accept="video/*"
              class="input-file"
            />
            <p v-if="isInitial">
              Drag your video here
              <br />or click to browse
            </p>
            <p v-if="isSaving">Uploading {{ fileCount }} files...</p>
          </div>
        </div>
      </form>
      <!--SUCCESS-->
      <div v-if="isSuccess">
        <h2>Upload successful.</h2>
        <img
          :src="'http://localhost:44301/' + uploadedFile.thumbnailURL"
          class="img-responsive img-thumbnail"
        />
      </div>
      <!--FAILED-->
      <div v-if="isFailed">
        <h2>Uploaded failed.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">Try again</a>
        </p>
        <pre>{{ uploadError }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { upload } from "../file-upload.service"; // real service
import { wait } from "../file-upload.service";
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;
export default {
  name: "app",
  data() {
    return {
      uploadedFile: null,
      title: "",
      description: "",
      uploadError: null,
      currentStatus: null,
      uploadFieldName: "videofile"
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFile = null;
      this.uploadError = null;
      this.title = null;
      this.description = null;
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;
      upload(formData)
        .then(wait(1500)) // DEV ONLY: wait for 1.5s
        .then(x => {
          this.uploadedFile = x;
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch(err => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();
      if (!fileList.length || !title) return;
      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
        formData.append("Title", this.title);
        formData.append("Description", this.description);
      });
      // save it
      this.save(formData);
    }
  },
  mounted() {
    this.reset();
  }
};
</script>

<style lang="css">
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>