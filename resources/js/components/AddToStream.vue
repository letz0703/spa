<template>
    <div class="message is-info">
        <div class="message-header">
            Push to the stream
        </div>

        <div class="message-body">
            <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
                <div class="field">
<!--                    <label class="label">New Message</label>-->
                    <div class="control">
                        <textarea class="textarea" placeholder="leave a message"
                                  v-model="form.body"
                        ></textarea>
                        <span class="help is-danger"
                              v-if="form.errors.has('body')"
                              v-text="form.errors.get('body')"
                        ></span>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-info is-link"
                                    :disabled="form.errors.any()"
                            >Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-info is-link is-light"
                                    @click.prevent="form.reset()"
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props: [''],

        data(){
            return {
                form: new Form({ body:''})
            }
        },
        methods: {
            onSubmit() {
                // this.form.post('/statuses').then(status => alert('All done'));
                this.form.post('/statuses')
                    .then(status => this.$emit('completed', status));
            }
        }
    }
</script>
