<template>
  <div>
    <h3>Create budget</h3>
    <CategoryPicker />
  </div>
</template>

<script>
import CategoryPicker from '@/components/category/picker/category-picker';

export default {
  name: 'CreateBudget',
  components: {
    CategoryPicker,
  },
};
</script>
