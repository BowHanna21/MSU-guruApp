<template>
  <q-drawer
    v-model="leftDrawer"
    content-class="bg-grey-3"
    @hide="shouldHide()"
    behavior="mobile"
  >
    <q-list>
      <div class="text-center q-py-xl text-h4">Menu</div>
      <template v-for="(menuItem, index) in userMenuList">
        <q-item
          :key="index"
          clickable
          :to="menuItem.router"
          exact-active-class="bg-grey text-white"
        >
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  props: ["isDrawer"],
  data() {
    return {
      leftDrawer: false,
      adminMenuList: [
        {
          label: "Profile",
          icon: "person",
          router: "/profile"
        },
        {
          label: "Consultation",
          icon: "list",
          router: ""
        },
        {
          label: "Task Organizer",
          icon: "list",
          router: ""
        }
      ],
      userMenuList: [
        {
          label: "Profile",
          icon: "person",
          router: "/profile"
        },
        {
          label: "Consultation",
          icon: "list",
          router: ""
        }
      ],
      studentMenuList: [
        {
          label: "Home",
          icon: "list",
          router: ""
        },
        {
          label: "Profile",
          icon: "person",
          router: "/profile"
        }
      ],
      user: {
        type: "admin"
      }
    };
  },
  watch: {
    isDrawer: function(val) {
      this.leftDrawer = val;
    }
  },
  methods: {
    shouldHide() {
      this.$emit("shoudHide", this.leftDrawer);
    }
  }
};
</script>
