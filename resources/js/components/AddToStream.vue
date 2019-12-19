<template>
    <div class="message is-info">
        <div class="message-header">
            Push to the stream
        </div>

        <div class="message-body">
            <form @submit.prevent="onSubmit">
                <div class="field">
<!--                    <label class="label">New Message</label>-->
                    <div class="control">
                        <textarea class="textarea" placeholder="leave a message"
                                  v-model="form.body"
                        ></textarea>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-info is-link">Submit</button>
                        </div>
<!--                        <div class="control">-->
<!--                            <button class="button is-info is-link is-light">Cancel</button>-->
<!--                        </div>-->
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
