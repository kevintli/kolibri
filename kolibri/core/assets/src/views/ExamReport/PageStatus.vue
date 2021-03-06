<template>

  <KGrid class="page-status">
    <KGridItem size="75" percentage>
      <div class="user-name-container">
        <mat-svg
          class="svg-item"
          category="action"
          name="face"
        />
        <h1 class="user-name">{{ $tr('title', {name: userName}) }}</h1>
      </div>
      <div class="questions">
        {{ $tr('overallScore', {score: score}) }}
      </div>
      <div class="questions">
        {{ $tr('questionsCorrect', { correct: questionsCorrect, total: questions.length }) }}
      </div>
    </KGridItem>
    <KGridItem size="25" percentage align="right">
      <div>
        <ProgressIcon class="svg-icon" :progress="progress" />
        <strong>
          <template v-if="completed">{{ $tr('completed') }}</template>
          <template v-else-if="completed !== null">{{ $tr('inProgress') }}</template>
          <template v-else>{{ $tr('notStarted') }}</template>
        </strong>
      </div>
      <div v-if="completed">
        <ElapsedTime :date="completionTimestamp" />
      </div>
    </KGridItem>
  </KGrid>

</template>


<script>

  import KGrid from 'kolibri.coreVue.components.KGrid';
  import KGridItem from 'kolibri.coreVue.components.KGridItem';
  import ProgressIcon from 'kolibri.coreVue.components.ProgressIcon';
  import ElapsedTime from 'kolibri.coreVue.components.ElapsedTime';

  export default {
    name: 'PageStatus',
    $trs: {
      title: '{name} - Exam performance',
      overallScore: 'Overall score: { score, number, percent }',
      questionsCorrect: 'Questions correct: {correct, number} of {total, number}',
      completed: 'Completed',
      inProgress: 'In progress',
      notStarted: 'Not started',
    },
    components: {
      KGrid,
      KGridItem,
      ProgressIcon,
      ElapsedTime,
    },
    props: {
      userName: {
        type: String,
        required: true,
      },
      questions: {
        type: Array,
        default: () => [],
      },
      completed: {
        type: Boolean,
        default: false,
      },
      completionTimestamp: { type: Date },
    },
    computed: {
      questionsCorrect() {
        return this.questions.reduce((a, q) => a + (q.correct === 1 ? 1 : 0), 0);
      },
      score() {
        return this.questions.reduce((a, q) => a + q.correct, 0) / this.questions.length || 0;
      },
      progress() {
        // Either return in completed or in progress
        return this.completed ? 1 : 0.1;
      },
    },
  };

</script>


<style lang="scss" scoped>

  @import '~kolibri.styles.definitions';

  .page-status {
    padding: 8px;
    background-color: $core-bg-light;
  }

  .user-name-container {
    display: block;
  }

  .svg-icon {
    margin-right: 8px;
    font-size: 1.3em;
  }

  .questions {
    margin-top: 10px;
  }

  .svg-item {
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
  }

  .user-name {
    display: inline-block;
    margin: 0;
    vertical-align: middle;
  }

</style>
