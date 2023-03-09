import Pagination from './Pagination.vue'
import { Meta, StoryFn } from '@storybook/vue3';

export default {
    title: 'Pagination',
    component: Pagination,
    argTypes: {
        onChangePage: {},
        onPrevPage: {},
        onNextPage: {}
    }
}as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => ({
    components: { Pagination },
    setup() {
      return { args };
    },
    template: '<Pagination v-bind="args" />',
  });

export const Primary = Template.bind({})

Primary.args = { totalPages: 5, currentPage: 2}